import math

from cryptocoma import model
from cryptocoma.model import Tower


def test_level_a_is_base_self_power():
    # a = (10**36) ** (10**36) = 10**(36 * 10**36); magnitude M(1) = 3.6e37 (fits a float)
    m = model.magnitudes(1)[0]
    assert m.height == 0
    assert math.isclose(m.top, 3.6e37, rel_tol=1e-9)


def test_level_b_is_a_tower():
    # b = a**a with a = (10**36)**(10**36): magnitude no longer fits a float -> height 1
    m2 = model.level_magnitude(2)
    assert m2.height == 1
    assert math.isclose(m2.top, 3.6e37, rel_tol=1e-9)


def test_level_c_is_a_taller_tower():
    m3 = model.level_magnitude(3)
    assert m3.height == 2
    assert math.isclose(m3.top, 3.6e37, rel_tol=1e-9)


def test_height_grows_one_per_level():
    mags = model.magnitudes(8)
    # index k is level k+1; the base a (n=1) has height 0, each further level adds one
    for k, m in enumerate(mags):
        n = k + 1
        expected = n - 1
        assert m.height == expected, (n, m.height)


def test_crypto_coma_height():
    cc = model.crypto_coma_magnitude()
    # z is level 26 (height 25); z**z adds one step -> height 26
    assert cc.height == 26
    assert math.isclose(cc.top, 3.6e37, rel_tol=1e-9)


def test_pow10_log10_roundtrip_small():
    t = Tower.exact(5.0)
    assert math.isclose(t.pow10().log10().top, 5.0, rel_tol=1e-12)


def test_letter_mapping():
    assert model.letter(1) == "a"
    assert model.letter(26) == "z"


def test_value_string_forms():
    # a = (10^36)^(10^36) has log10 magnitude 3.6e37 rendered in scientific form
    assert model.level_magnitude(1).value_str() == "10^(3.6e+37)"
    assert model.level_magnitude(3).value_str().startswith("10^(10^(")
