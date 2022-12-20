import { is } from "@deepkit/type";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ConstantConstEnumeration = _test_deepkit_is(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => is<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);