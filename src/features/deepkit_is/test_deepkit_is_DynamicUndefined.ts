import { is } from "@deepkit/type";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicUndefined = _test_deepkit_is(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => is<DynamicUndefined>(input),
    DynamicUndefined.SPOILERS,
);