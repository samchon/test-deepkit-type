import { is } from "@deepkit/type";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ArrayAtomicAlias = _test_deepkit_is(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => is<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);