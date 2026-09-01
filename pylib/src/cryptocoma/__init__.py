"""cryptocoma — log-scale magnitudes of the Crypto Coma power tower.

See ``docs/formal-model.md`` for the definitions this package implements.
"""

from .model import (
    LEVELS,
    START_LOG10,
    Tower,
    crypto_coma_magnitude,
    letter,
    level_magnitude,
    magnitudes,
)
from .scales import ScaleHint, describe

__all__ = [
    "LEVELS",
    "START_LOG10",
    "Tower",
    "magnitudes",
    "level_magnitude",
    "crypto_coma_magnitude",
    "letter",
    "describe",
    "ScaleHint",
]

__version__ = "0.1.0"
