import json

from cryptocoma import cli


def test_build_dataset_shape():
    data = cli.build_dataset()
    assert data["meta"]["start_value_log10"] == 36.0
    assert data["meta"]["levels"] == 26
    assert len(data["levels"]) == 26
    assert data["levels"][0]["letter"] == "a"
    assert data["levels"][-1]["letter"] == "z"
    assert data["crypto_coma"]["definition"] == "z ^ z = L(26) ^ L(26)"
    assert data["crypto_coma"]["tower_height"] == 26
    assert data["meta"]["a_value"] == "(10^36)^(10^36)"


def test_table_writes_json(tmp_path, capsys):
    out = tmp_path / "levels.json"
    rc = cli.main(["table", "--out", str(out)])
    assert rc == 0
    assert out.exists()
    data = json.loads(out.read_text(encoding="utf-8"))
    assert len(data["levels"]) == 26
    assert data["crypto_coma"]["symbol"] == cli.SYMBOL
    captured = capsys.readouterr()
    assert "crypto coma" in captured.out


def test_no_write_flag(tmp_path):
    out = tmp_path / "levels.json"
    rc = cli.main(["table", "--out", str(out), "--no-write"])
    assert rc == 0
    assert not out.exists()
