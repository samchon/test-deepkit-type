import { is } from "@deepkit/type";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayRecursiveUnionExplicit = _test_deepkit_is(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => is<ArrayRecursiveUnionExplicit>(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);