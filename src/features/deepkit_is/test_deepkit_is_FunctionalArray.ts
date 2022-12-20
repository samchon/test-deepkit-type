import { is } from "@deepkit/type";

import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalArray = _test_deepkit_is(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => is<FunctionalArray>(input),
    FunctionalArray.SPOILERS,
);