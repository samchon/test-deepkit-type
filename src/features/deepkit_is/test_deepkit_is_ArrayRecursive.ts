import { is } from "@deepkit/type";

import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayRecursive = _test_deepkit_is(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => is<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);