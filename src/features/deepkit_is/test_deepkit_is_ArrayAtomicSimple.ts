import { is } from "@deepkit/type";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayAtomicSimple = _test_deepkit_is(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => is<ArrayAtomicSimple>(input),
    ArrayAtomicSimple.SPOILERS,
);