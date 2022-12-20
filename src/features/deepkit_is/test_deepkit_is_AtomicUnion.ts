import { is } from "@deepkit/type";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_AtomicUnion = _test_deepkit_is(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => is<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);