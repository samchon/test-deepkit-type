import { is } from "@deepkit/type";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_DynamicTree = _test_deepkit_is(
    "DynamicTree",
    DynamicTree.generate,
    (input) => is<DynamicTree>(input),
    DynamicTree.SPOILERS,
);