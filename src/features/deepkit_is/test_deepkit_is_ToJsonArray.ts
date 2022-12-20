import { is } from "@deepkit/type";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonArray = _test_deepkit_is(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => is<ToJsonArray>(input),
);