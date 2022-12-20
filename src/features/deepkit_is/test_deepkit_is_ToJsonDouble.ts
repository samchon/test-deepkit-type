import { is } from "@deepkit/type";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonDouble = _test_deepkit_is(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => is<ToJsonDouble>(input),
);