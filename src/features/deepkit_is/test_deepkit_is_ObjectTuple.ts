import { is } from "@deepkit/type";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectTuple = _test_deepkit_is(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => is<ObjectTuple>(input),
    ObjectTuple.SPOILERS,
);