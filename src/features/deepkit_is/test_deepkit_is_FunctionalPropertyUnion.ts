import { is } from "@deepkit/type";

import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalPropertyUnion = _test_deepkit_is(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => is<FunctionalPropertyUnion>(input),
    FunctionalPropertyUnion.SPOILERS,
);