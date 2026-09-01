import math

from cryptocoma import model
from cryptocoma.model import Tower


def test_level_a_is_undecillion():
    m = model.magnitudes(1)[0]
    assert m.height == 0
    assert m.top == 36.0  # log10(10**36)


def test_level_b_magnitude():
    # b = a**a = 10**(36 * 10**36) = 10**(3.6e37); magnitude M(2) = 3.6e37
    m2 = model.level_magnitude(2)
    assert m2.height == 0
    assert math.isclose(m2.top, 3.6e37, rel_tol=1e-9)


def test_level_c_is_a_tower():
    # c = 10**(3.6e37): magnitude no longer fits a float -> height 1
    m3 = model.level_magnitude(3)
    assert m3.height == 1
    assert math.isclose(m3.top, 3.6e37, rel_tol=1e-9)


def test_height_grows_one_per_level():
    mags = model.magnitudes(8)
    # index k is level k+1; for level n>=2, tower height == n-2
    for k, m in enumerate(mags):
        n = k + 1
        expected = max(0, n - 2)
        assert m.height == expected, (n, m.height)


def test_crypto_coma_height():
    cc = model.crypto_coma_magnitude()
    # z is level 26 (height 24); z**z adds one step -> height 25
    assert cc.height == 25
    assert math.isclose(cc.top, 3.6e37, rel_tol=1e-9)


def test_pow10_log10_roundtrip_small():
    t = Tower.exact(5.0)
    assert math.isclose(t.pow10().log10().top, 5.0, rel_tol=1e-12)


def test_letter_mapping():
    assert model.letter(1) == "a"
    assert model.letter(26) == "z"


def test_value_string_forms():
    assert model.level_magnitude(1).value_str() == "10^(36)"
    assert model.level_magnitude(3).value_str().startswith("10^(10^(")
