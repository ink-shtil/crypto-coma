"""Core model of the Crypto Coma power tower.

Single source of truth: ``docs/formal-model.md``.

Levels ``a … z`` are ``L(1) … L(26)`` with

    L(1) = a = (10**36) ** (10**36)   (one self-power above the undecillion anchor)
    L(n+1) = L(n) ** L(n)             (offset tetration)

    crypto coma = z ** z = L(26) ** L(26)

The level *values* are unrepresentable (already ``L(2) = 10**(3.6e37)``), so we never
store them.  We store the **magnitude** ``M(n) = log10(L(n))`` and, when that itself
overflows a float, an **iterated-log power tower**.

Magnitude recurrence (derived by taking ``log10`` of the value recurrence)::

    M(n+1) = M(n) + log10(M(n))   then raised:   L-magnitude grows as
    log10(M(n+1)) ... — implemented here as  M(n+1) = pow10( M(n) + log10(M(n)) )

A magnitude is held as a :class:`Tower` ``(height, top)`` meaning the value is ``10``
stacked ``height`` times over ``top`` (``height == 0`` → the value is ``top`` itself).
"""

from __future__ import annotations

import math
from dataclasses import dataclass

#: log10 of the **anchor / sub-base** ``10**36`` (the undecillion).  The one free
#: parameter; change it only here and in ``docs/formal-model.md`` §1.1.  The base level
#: ``a`` is one self-power above this anchor: ``a = (10**36) ** (10**36)`` (see
#: ``magnitudes``), so ``10**36`` survives only as the sub-base printed inside ``a``.
START_LOG10 = 36.0

#: Number of lettered levels ``a … z``.
LEVELS = 26

#: Above this log10 exponent, ``10 ** top`` overflows a float, so a new tower height is
#: pushed instead of computing the power directly.
_FLOAT_EXP_CAP = 307.0

_ALPHABET = "abcdefghijklmnopqrstuvwxyz"


@dataclass(frozen=True)
class Tower:
    """A positive magnitude as an iterated power of ten.

    ``value = 10↑↑height (top)`` where ``height`` is the number of stacked ``10**`` over
    ``top``.  ``height == 0`` means ``value == top``.
    """

    height: int
    top: float

    # -- construction helpers -------------------------------------------------
    @staticmethod
    def exact(value: float) -> Tower:
        """A plain (height-0) magnitude, e.g. ``Tower.exact(36)``."""
        return Tower(0, float(value))

    # -- operations (see module docstring) ------------------------------------
    def log10(self) -> Tower:
        """log10 of this magnitude, as a Tower."""
        if self.height == 0:
            if self.top <= 0:
                raise ValueError("log10 of a non-positive magnitude")
            return Tower(0, math.log10(self.top))
        # value = 10↑↑h(top)  ->  log10 = 10↑↑(h-1)(top)
        return Tower(self.height - 1, self.top)

    def pow10(self) -> Tower:
        """10 ** self, as a Tower (exact in this representation)."""
        if self.height == 0:
            if self.top <= _FLOAT_EXP_CAP:
                return Tower(0, 10.0**self.top)
            return Tower(1, self.top)
        return Tower(self.height + 1, self.top)

    def _add_smaller(self, other: Tower) -> Tower:
        """Approximate self + other.

        When heights differ the taller tower dominates by an unimaginable margin, so the
        smaller term is below float precision and dropped.  Only equal height-0 towers add
        exactly (this is where the ``M(n) + log10(M(n))`` correction actually lands).
        """
        if self.height != other.height:
            return self if self.height > other.height else other
        if self.height == 0:
            return Tower(0, self.top + other.top)
        return Tower(self.height, max(self.top, other.top))

    # -- rendering ------------------------------------------------------------
    def log10_str(self) -> str:
        """Human string for this magnitude (i.e. for ``log10`` of a level value)."""
        if self.height == 0:
            top = self.top
            if top == int(top) and abs(top) < 1e15:
                return f"{int(top)}"
            return f"{top:.4g}"
        inner = f"{self.top:.4g}"
        s = inner
        for _ in range(self.height):
            s = f"10^({s})"
        return s

    def value_str(self) -> str:
        """Human string for the *level value* ``L = 10 ** magnitude``."""
        return f"10^({self.log10_str()})"

    def as_dict(self) -> dict:
        return {"height": self.height, "top": self.top}

    def __str__(self) -> str:  # pragma: no cover - convenience
        return self.log10_str()


def _next_magnitude(m: Tower) -> Tower:
    """M(n) -> M(n+1) = pow10( M(n) + log10(M(n)) )."""
    return m._add_smaller(m.log10()).pow10()


def magnitudes(up_to: int = LEVELS) -> list[Tower]:
    """Magnitudes ``M(1) … M(up_to)`` (index ``k`` is level ``k+1``)."""
    if up_to < 1:
        raise ValueError("up_to must be >= 1")
    # M(1) is the base level ``a = (10**36) ** (10**36)`` — one self-power above the
    # ``10**36`` anchor, i.e. one ``_next_magnitude`` step past ``log10(10**36) = 36``.
    m = _next_magnitude(Tower.exact(START_LOG10))
    out = [m]
    for _ in range(1, up_to):
        m = _next_magnitude(m)
        out.append(m)
    return out


def level_magnitude(n: int) -> Tower:
    """Magnitude ``M(n) = log10(L(n))`` for level ``n`` (``1 <= n <= 26``)."""
    if not 1 <= n <= LEVELS:
        raise ValueError(f"level n must be in 1..{LEVELS}")
    return magnitudes(n)[-1]


def crypto_coma_magnitude() -> Tower:
    """Magnitude of the crypto coma ``= z ** z`` (one recurrence step beyond ``z``)."""
    return _next_magnitude(level_magnitude(LEVELS))


def letter(n: int) -> str:
    """Letter for level ``n`` (1 -> 'a' … 26 -> 'z')."""
    if not 1 <= n <= LEVELS:
        raise ValueError(f"level n must be in 1..{LEVELS}")
    return _ALPHABET[n - 1]
