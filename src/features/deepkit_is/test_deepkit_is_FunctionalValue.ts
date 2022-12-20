import { is } from "@deepkit/type";

import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalValue = _test_deepkit_is(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) => is<FunctionalValue>(input),
);