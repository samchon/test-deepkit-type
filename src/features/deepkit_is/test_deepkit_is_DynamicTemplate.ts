import { is } from "@deepkit/type";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicTemplate = _test_deepkit_is(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => is<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);