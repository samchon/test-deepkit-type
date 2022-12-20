import { is } from "@deepkit/type";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ConstantEnumeration = _test_deepkit_is(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => is<ConstantEnumeration>(input),
    ConstantEnumeration.SPOILERS,
);