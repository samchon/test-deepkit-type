import { is } from "@deepkit/type";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicArray = _test_deepkit_is(
    "DynamicArray",
    DynamicArray.generate,
    (input) => is<DynamicArray>(input),
    DynamicArray.SPOILERS,
);