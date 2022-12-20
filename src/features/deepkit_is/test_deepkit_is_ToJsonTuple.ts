import { is } from "@deepkit/type";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonTuple = _test_deepkit_is(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => is<ToJsonTuple>(input),
);