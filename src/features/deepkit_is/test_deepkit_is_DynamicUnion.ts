import { is } from "@deepkit/type";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicUnion = _test_deepkit_is(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => is<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);