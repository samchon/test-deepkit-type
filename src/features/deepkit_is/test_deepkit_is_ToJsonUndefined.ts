import { is } from "@deepkit/type";

import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonUndefined = _test_deepkit_is(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) => is<ToJsonUndefined>(input),
);