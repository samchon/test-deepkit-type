import { is } from "@deepkit/type";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_UltimateUnion = _test_deepkit_is(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => is<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);