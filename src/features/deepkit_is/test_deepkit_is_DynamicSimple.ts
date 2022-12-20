import { is } from "@deepkit/type";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicSimple = _test_deepkit_is(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => is<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);