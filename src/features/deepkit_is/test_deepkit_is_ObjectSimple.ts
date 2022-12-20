import { is } from "@deepkit/type";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectSimple = _test_deepkit_is(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => is<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);