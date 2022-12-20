import { is } from "@deepkit/type";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayHierarchical = _test_deepkit_is(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => is<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);