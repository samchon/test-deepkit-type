import { is } from "@deepkit/type";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectDynamic = _test_deepkit_is(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => is<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);