import { is } from "@deepkit/type";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectRecursive = _test_deepkit_is(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => is<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);