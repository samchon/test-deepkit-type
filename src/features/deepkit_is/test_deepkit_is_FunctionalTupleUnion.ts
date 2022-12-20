import { is } from "@deepkit/type";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalTupleUnion = _test_deepkit_is(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => is<FunctionalTupleUnion>(input),
    FunctionalTupleUnion.SPOILERS,
);