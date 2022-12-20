import { is } from "@deepkit/type";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayRecursiveUnionImplicit = _test_deepkit_is(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => is<ArrayRecursiveUnionImplicit>(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);