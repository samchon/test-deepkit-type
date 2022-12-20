import { is } from "@deepkit/type";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TupleHierarchical = _test_deepkit_is(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => is<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);