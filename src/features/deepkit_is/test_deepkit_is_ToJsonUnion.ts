import { is } from "@deepkit/type";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonUnion = _test_deepkit_is(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => is<ToJsonUnion>(input),
);