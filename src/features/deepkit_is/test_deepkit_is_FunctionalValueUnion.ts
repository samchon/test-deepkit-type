import { is } from "@deepkit/type";

import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalValueUnion = _test_deepkit_is(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => is<FunctionalValueUnion>(input),
    FunctionalValueUnion.SPOILERS,
);