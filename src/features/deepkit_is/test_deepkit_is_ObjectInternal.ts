import { is } from "@deepkit/type";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectInternal = _test_deepkit_is(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => is<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);