import { is } from "@deepkit/type";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectPrimitive = _test_deepkit_is(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => is<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);