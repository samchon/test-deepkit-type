import { is } from "@deepkit/type";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayAny = _test_deepkit_is(
    "ArrayAny",
    ArrayAny.generate,
    (input) => is<ArrayAny>(input),
    ArrayAny.SPOILERS,
);