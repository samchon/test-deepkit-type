import { is } from "@deepkit/type";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicConstant = _test_deepkit_is(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => is<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);