import { is } from "@deepkit/type";

import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalTuple = _test_deepkit_is(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => is<FunctionalTuple>(input),
    FunctionalTuple.SPOILERS,
);