import { is } from "@deepkit/type";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayMatrix = _test_deepkit_is(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => is<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);