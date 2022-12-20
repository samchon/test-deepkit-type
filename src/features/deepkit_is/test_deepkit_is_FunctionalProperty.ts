import { is } from "@deepkit/type";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalProperty = _test_deepkit_is(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => is<FunctionalProperty>(input),
    FunctionalProperty.SPOILERS,
);