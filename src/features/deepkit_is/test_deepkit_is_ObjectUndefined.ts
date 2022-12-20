import { is } from "@deepkit/type";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectUndefined = _test_deepkit_is(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => is<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);