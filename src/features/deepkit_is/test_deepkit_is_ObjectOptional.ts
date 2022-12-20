import { is } from "@deepkit/type";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectOptional = _test_deepkit_is(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => is<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);