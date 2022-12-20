import { is } from "@deepkit/type";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArraySimple = _test_deepkit_is(
    "ArraySimple",
    ArraySimple.generate,
    (input) => is<ArraySimple>(input),
    ArraySimple.SPOILERS,
);