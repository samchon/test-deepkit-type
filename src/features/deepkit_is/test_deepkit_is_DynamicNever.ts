import { is } from "@deepkit/type";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicNever = _test_deepkit_is(
    "DynamicNever",
    DynamicNever.generate,
    (input) => is<DynamicNever>(input),
    DynamicNever.SPOILERS,
);