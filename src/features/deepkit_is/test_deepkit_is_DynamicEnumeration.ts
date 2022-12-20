import { is } from "@deepkit/type";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicEnumeration = _test_deepkit_is(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => is<DynamicEnumeration>(input),
    DynamicEnumeration.SPOILERS,
);