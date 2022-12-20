import { is } from "@deepkit/type";

import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalObjectUnion = _test_deepkit_is(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => is<FunctionalObjectUnion>(input),
    FunctionalObjectUnion.SPOILERS,
);