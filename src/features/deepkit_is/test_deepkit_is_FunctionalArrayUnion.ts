import { is } from "@deepkit/type";

import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_FunctionalArrayUnion = _test_deepkit_is(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => is<FunctionalArrayUnion>(input),
    FunctionalArrayUnion.SPOILERS,
);