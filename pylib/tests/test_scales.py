from cryptocoma import model
from cryptocoma.scales import describe


def test_undecillion_nearest():
    hint = describe(36.0)
    assert hint.nearest is not None
    assert "undecillion" in hint.nearest.name_en
    assert "ундециллион" in hint.nearest.name_ru


def test_atoms_in_universe_nearest():
    hint = describe(80.0)
    assert hint.nearest is not None
    assert "atoms in the observable universe" in hint.nearest.name_en


def test_hint_is_bilingual():
    hint = describe(36.0)
    assert set(hint.phrasing) == {"ru", "en"}
    assert hint.phrasing["ru"] and hint.phrasing["en"]


def test_large_float_is_beyond_physical():
    hint = describe(1e30)
    assert hint.beyond_physical is True
    assert hint.nearest is None


def test_tower_magnitude_is_beyond_physical():
    # any level >= b has a tower/huge magnitude -> beyond physical
    hint = describe(model.level_magnitude(2))
    assert hint.beyond_physical is True


def test_level_a_is_within_physical_scales():
    hint = describe(model.level_magnitude(1))
    assert hint.beyond_physical is False
