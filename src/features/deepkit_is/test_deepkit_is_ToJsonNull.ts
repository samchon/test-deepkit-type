import { is } from "@deepkit/type";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonNull = _test_deepkit_is(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => is<ToJsonNull>(input),
);