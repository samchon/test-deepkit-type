import { is } from "@deepkit/type";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectIntersection = _test_deepkit_is(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => is<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);