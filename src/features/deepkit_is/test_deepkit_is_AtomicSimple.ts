import { is } from "@deepkit/type";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_AtomicSimple = _test_deepkit_is(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => is<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);