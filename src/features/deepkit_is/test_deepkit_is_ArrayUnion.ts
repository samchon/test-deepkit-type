import { is } from "@deepkit/type";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayUnion = _test_deepkit_is(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => is<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);